const Privacy = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="prose prose-invert max-w-none">
          <p>Privacy policy content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
