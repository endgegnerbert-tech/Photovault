export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black py-20 px-8 lg:px-20 max-w-4xl mx-auto">
      <h1 className="font-syne text-4xl mb-6">Terms of Service</h1>
      <div className="prose prose-gray">
        <p>By using SaecretHeaven, you agree to these terms.</p>
        <h3>1. Usage</h3>
        <p>This is a Beta release. Use at your own risk. Always keep a backup of your recovery key.</p>
        <h3>2. Liability</h3>
        <p>We are not responsible for data loss due to lost recovery keys.</p>
      </div>
    </div>
  );
}
