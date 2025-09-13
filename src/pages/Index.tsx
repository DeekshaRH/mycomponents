import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-info/5" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-on-surface mb-6">
              React Component Library
            </h1>
            <p className="text-xl text-on-surface-variant mb-8 max-w-2xl mx-auto">
              Modern, accessible, and beautiful components built with React, TypeScript, and Tailwind CSS. 
              Perfect for building scalable applications with consistent design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-on-primary">
                  View Components
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-border hover:bg-surface-variant">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-on-surface mb-4">
              Built for Modern Development
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Our component library provides everything you need to build beautiful, accessible, and performant user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-radius-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-3">TypeScript First</h3>
              <p className="text-on-surface-variant">
                Full TypeScript support with comprehensive type definitions for better development experience and type safety.
              </p>
            </Card>

            <Card className="p-8 text-center border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-success/10 rounded-radius-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-3">Design System</h3>
              <p className="text-on-surface-variant">
                Consistent design tokens and theming system built with Tailwind CSS for maintainable styling.
              </p>
            </Card>

            <Card className="p-8 text-center border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-warning/10 rounded-radius-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-warning" />
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-3">Performance</h3>
              <p className="text-on-surface-variant">
                Optimized components with minimal bundle size and excellent runtime performance for smooth user experiences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Components Preview */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-on-surface mb-4">
              Featured Components
            </h2>
            <p className="text-lg text-on-surface-variant">
              Explore our carefully crafted components designed for real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* InputField Preview */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-on-surface mb-2">InputField</h3>
                <p className="text-on-surface-variant">
                  Flexible input component with validation states, variants, and additional features like password toggle and clear button.
                </p>
              </div>
              <Card className="p-6 border border-border">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full h-10 px-4 border border-border rounded-radius bg-input-bg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        defaultValue="user@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">Password</label>
                      <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full h-10 px-4 border border-border rounded-radius bg-input-bg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        defaultValue="secretpassword"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* DataTable Preview */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-on-surface mb-2">DataTable</h3>
                <p className="text-on-surface-variant">
                  Powerful data table with sorting, selection, loading states, and customizable columns for displaying tabular data.
                </p>
              </div>
              <Card className="p-6 border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-table-header border-b border-table-border">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-on-surface">Name</th>
                        <th className="px-4 py-3 text-left font-semibold text-on-surface">Role</th>
                        <th className="px-4 py-3 text-left font-semibold text-on-surface">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-table-border">
                        <td className="px-4 py-3 text-on-surface">Alice Johnson</td>
                        <td className="px-4 py-3 text-on-surface">Admin</td>
                        <td className="px-4 py-3">
                          <span className="bg-success-light text-success px-2 py-1 rounded-radius-sm text-xs">Active</span>
                        </td>
                      </tr>
                      <tr className="border-b border-table-border">
                        <td className="px-4 py-3 text-on-surface">Bob Smith</td>
                        <td className="px-4 py-3 text-on-surface">Developer</td>
                        <td className="px-4 py-3">
                          <span className="bg-success-light text-success px-2 py-1 rounded-radius-sm text-xs">Active</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-on-surface">Carol White</td>
                        <td className="px-4 py-3 text-on-surface">Designer</td>
                        <td className="px-4 py-3">
                          <span className="bg-warning-light text-warning px-2 py-1 rounded-radius-sm text-xs">Pending</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/demo">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-on-primary">
                Explore All Components
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-on-surface-variant mb-2">React Component Library Assignment</p>
          <p className="text-sm text-on-surface-variant">
            Built with React, TypeScript, Tailwind CSS, and Storybook
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
