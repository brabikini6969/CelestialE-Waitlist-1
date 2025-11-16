import { Layout } from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] bg-background p-4">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-orbitron font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="prose prose-invert max-w-none">
            <p>Terms of service content coming soon...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
