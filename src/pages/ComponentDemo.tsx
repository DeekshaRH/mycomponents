import React, { useState } from 'react';
import { InputField } from '@/components/library/InputField';
import { DataTable, Column } from '@/components/library/DataTable';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

// Sample data for the demo
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  department: string;
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    status: 'active',
    joinDate: '2023-01-15',
    department: 'Engineering',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'Developer',
    status: 'active',
    joinDate: '2023-03-22',
    department: 'Engineering',
  },
  {
    id: 3,
    name: 'Carol White',
    email: 'carol@example.com',
    role: 'Designer',
    status: 'inactive',
    joinDate: '2023-02-10',
    department: 'Design',
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david@example.com',
    role: 'Manager',
    status: 'pending',
    joinDate: '2023-04-05',
    department: 'Marketing',
  },
  {
    id: 5,
    name: 'Eva Davis',
    email: 'eva@example.com',
    role: 'Developer',
    status: 'active',
    joinDate: '2023-01-28',
    department: 'Engineering',
  },
];

const userColumns: Column<User>[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    sortable: true,
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    sortable: true,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    sortable: true,
    render: (value) => {
      const status = value as User['status'];
      const variants = {
        active: 'bg-success-light text-success border-success/20',
        inactive: 'bg-error-light text-error border-error/20',
        pending: 'bg-warning-light text-warning border-warning/20',
      };
      return (
        <Badge variant="outline" className={variants[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      );
    },
  },
  {
    key: 'department',
    title: 'Department',
    dataIndex: 'department',
    sortable: true,
  },
  {
    key: 'joinDate',
    title: 'Join Date',
    dataIndex: 'joinDate',
    sortable: true,
    render: (value) => new Date(value as string).toLocaleDateString(),
  },
];

const ComponentDemo = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    search: 'Sample search text',
  });

  // Table state
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleClear = (field: string) => () => {
    setFormData(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-on-surface mb-2">
            React Component Library
          </h1>
          <p className="text-on-surface-variant text-lg">
            Modern, accessible, and beautiful components built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* InputField Demo */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-on-surface mb-2">InputField Component</h2>
            <p className="text-on-surface-variant">
              A flexible input component with validation states, variants, and additional features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Variants */}
            <Card className="p-6">
              <h3 className="text-lg font-medium text-on-surface mb-4">Variants & Sizes</h3>
              <div className="space-y-6">
                <InputField
                  label="Outlined (Default)"
                  placeholder="Enter text here"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                />
                
                <InputField
                  label="Filled Variant"
                  placeholder="Filled input style"
                  variant="filled"
                  size="lg"
                />
                
                <InputField
                  label="Ghost Variant"
                  placeholder="Ghost input style"
                  variant="ghost"
                  size="sm"
                />
              </div>
            </Card>

            {/* Input Features */}
            <Card className="p-6">
              <h3 className="text-lg font-medium text-on-surface mb-4">Features</h3>
              <div className="space-y-6">
                <InputField
                  label="Email with Validation"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  invalid={formData.email !== '' && !formData.email.includes('@')}
                  errorMessage={formData.email !== '' && !formData.email.includes('@') ? 'Please enter a valid email' : undefined}
                />
                
                <InputField
                  label="Password with Toggle"
                  placeholder="Enter password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  helperText="Password should be at least 8 characters"
                />
                
                <InputField
                  label="Search with Clear"
                  placeholder="Search anything..."
                  value={formData.search}
                  onChange={handleInputChange('search')}
                  clearable
                  onClear={handleClear('search')}
                />
              </div>
            </Card>
          </div>

          {/* Input States */}
          <Card className="p-6 mt-8">
            <h3 className="text-lg font-medium text-on-surface mb-4">States</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InputField
                label="Normal"
                placeholder="Normal state"
              />
              
              <InputField
                label="Loading"
                placeholder="Loading..."
                loading
              />
              
              <InputField
                label="Disabled"
                placeholder="Disabled input"
                disabled
                value="Cannot edit"
              />
              
              <InputField
                label="Error State"
                placeholder="Invalid input"
                invalid
                errorMessage="This field is required"
              />
            </div>
          </Card>
        </section>

        {/* DataTable Demo */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-on-surface mb-2">DataTable Component</h2>
            <p className="text-on-surface-variant">
              A powerful data table with sorting, selection, and customizable columns.
            </p>
          </div>

          <Card className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-on-surface mb-2">User Management Table</h3>
              <p className="text-on-surface-variant text-sm">
                Click column headers to sort • Select rows using checkboxes • Responsive design
              </p>
            </div>
            
            <DataTable
              data={sampleUsers}
              columns={userColumns}
              selectable
              onRowSelect={setSelectedUsers}
              size="md"
            />
            
            {selectedUsers.length > 0 && (
              <div className="mt-4 p-4 bg-info-light rounded-radius">
                <p className="text-info font-medium">
                  {selectedUsers.length} user{selectedUsers.length !== 1 ? 's' : ''} selected:
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedUsers.map(user => (
                    <Badge key={user.id} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {user.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {/* Table Features */}
          <Card className="p-6 mt-8">
            <h3 className="text-lg font-medium text-on-surface mb-4">Table Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-on-surface mb-2">✨ Sorting</h4>
                <p className="text-sm text-on-surface-variant">
                  Click any column header to sort data in ascending or descending order.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-on-surface mb-2">☑️ Selection</h4>
                <p className="text-sm text-on-surface-variant">
                  Single or multiple row selection with select all functionality.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-on-surface mb-2">🎨 Customization</h4>
                <p className="text-sm text-on-surface-variant">
                  Custom cell rendering, alignment, and responsive design.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-border">
          <div className="text-center text-on-surface-variant">
            <p className="mb-2">React Component Library Demo</p>
            <p className="text-sm">Built with React, TypeScript, Tailwind CSS, and Storybook</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ComponentDemo;