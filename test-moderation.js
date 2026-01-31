
const supabaseUrl = 'https://jextayidnmtsoofugnig.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpleHRheWlkbm10c29vZnVnbmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODM1MDAsImV4cCI6MjA4NDY1OTUwMH0.vxRq32MPWyO_znst5nFCiQ7AWJtlJeOFWMY-RlZmjrs';
const functionUrl = `${supabaseUrl}/functions/v1/post-comment`;

async function testSentinel() {
    console.log("🛡️ STARTING SENTINEL PRESSURE TEST...");

    // 1. Seed Comments
    const comments = [
        { type: 'SAFE', content: 'This app is actually really helpful for my privacy.', author: 'GoodUser' },
        { type: 'HATE (Bypass)', content: 'I h.a.t.e all of you p.e.o.p.l.e, go away.', author: 'Hater123' },
        { type: 'SPAM', content: 'Buy Bitcoin now! Visit my-crypto-scam.com for 1000% returns.', author: 'CryptoBot' },
        { type: 'TROLL', content: 'You are all absolute idiots for using this app.', author: 'TrollKey' }
    ];

    const postedIds = [];

    console.log("\n1️⃣ Seeding Database with Mixed Comments...");
    for (const c of comments) {
        try {
            const res = await fetch(functionUrl, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${supabaseKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ author_name: c.author, content: c.content, feature_slug: 'sentinel-test' })
            });

            if (res.ok) {
                const data = await res.json();
                console.log(`   [POSTED] ${c.type}: "${c.content}" (ID: ${data.id})`);
                postedIds.push({ id: data.id, type: c.type });
            } else {
                console.log(`   [BLOCKED LOCALLY] ${c.type}: "${c.content}"`);
            }
        } catch (err) { console.error("Post Error:", err); }
    }

    console.log(`\n   ✅ Seeded ${postedIds.length} comments. Waiting 2 seconds before waking Jules...`);
    await new Promise(r => setTimeout(r, 2000));

    // 2. Trigger Sentinel
    console.log("\n2️⃣ Waking up Jules (Immediate Nightly Run)...");
    const batchUrl = functionUrl.replace('post-comment', 'moderate-batch');

    try {
        const resBatch = await fetch(batchUrl, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${supabaseKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ debug: true })
        });

        if (!resBatch.ok) {
            console.log("❌ Jules crashed:", resBatch.status, await resBatch.text());
            return;
        }

        const batchResult = await resBatch.json();
        console.log(`   ℹ️  Jules Processed: ${batchResult.processed} comments.`);
        console.log(`   ℹ️  Full Report:`, JSON.stringify(batchResult.details, null, 2));

        // 3. Verify Results
        console.log("\n3️⃣ Verifying Survival...");

        for (const p of postedIds) {
            const result = batchResult.details?.find(d => d.id === p.id);

            let status = '❓';
            let displayAction = 'UNKNOWN';

            if (result) {
                if (result.error) {
                    status = '⚠️ ERROR';
                    displayAction = `ERROR: ${result.error}`;
                } else {
                    displayAction = result.action.toUpperCase();
                    if (p.type === 'SAFE' && result.action === 'approved') status = '✅';
                    else if (p.type !== 'SAFE' && result.action === 'deleted') status = '✅';
                    else status = '❌ FAILURE';
                }
            } else {
                status = '⏭️ SKIPPED';
                displayAction = 'NOT_PROCESSED';
            }

            console.log(`   ${status} [${p.type}] -> Action: ${displayAction}`);
        }

    } catch (err) { console.error("Batch Error:", err); }
}

testSentinel();
