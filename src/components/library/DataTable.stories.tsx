import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DataTable, Column } from './DataTable';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A data table component with sorting, selection, and customizable columns.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data types
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  department: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

// Sample user data
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

// Sample product data
const sampleProducts: Product[] = [
  {
    id: 'P001',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 199.99,
    stock: 45,
    rating: 4.8,
  },
  {
    id: 'P002',
    name: 'Coffee Maker',
    category: 'Appliances',
    price: 89.99,
    stock: 23,
    rating: 4.2,
  },
  {
    id: 'P003',
    name: 'Desk Lamp',
    category: 'Furniture',
    price: 49.99,
    stock: 67,
    rating: 4.5,
  },
];

// User table columns
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
        <Badge 
          variant="outline" 
          className={variants[status]}
        >
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

// Product table columns
const productColumns: Column<Product>[] = [
  {
    key: 'name',
    title: 'Product Name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    key: 'category',
    title: 'Category',
    dataIndex: 'category',
    sortable: true,
  },
  {
    key: 'price',
    title: 'Price',
    dataIndex: 'price',
    sortable: true,
    align: 'right',
    render: (value) => `$${(value as number).toFixed(2)}`,
  },
  {
    key: 'stock',
    title: 'Stock',
    dataIndex: 'stock',
    sortable: true,
    align: 'center',
    render: (value) => {
      const stock = value as number;
      return (
        <span className={stock < 30 ? 'text-error font-medium' : 'text-on-surface'}>
          {stock}
        </span>
      );
    },
  },
  {
    key: 'rating',
    title: 'Rating',
    dataIndex: 'rating',
    sortable: true,
    align: 'center',
    render: (value) => (
      <div className="flex items-center justify-center">
        <span className="text-warning mr-1">★</span>
        {value}
      </div>
    ),
  },
];

// Controlled table wrapper
const ControlledTable = <T,>(args: any) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  
  return (
    <div style={{ width: '800px' }}>
      <DataTable
        {...args}
        onRowSelect={setSelectedRows}
      />
      {args.selectable && selectedRows.length > 0 && (
        <div className="mt-4 p-3 bg-info-light rounded-radius text-size-sm">
          Selected {selectedRows.length} row(s)
        </div>
      )}
    </div>
  );
};

export const Default: Story = {
  render: ControlledTable,
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
};

export const WithSelection: Story = {
  render: ControlledTable,
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
};

export const ProductTable: Story = {
  render: ControlledTable,
  args: {
    data: sampleProducts,
    columns: productColumns,
    selectable: true,
    rowKey: 'id',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8" style={{ width: '800px' }}>
      <div>
        <h3 className="text-lg font-medium mb-4">Small Size</h3>
        <DataTable
          data={sampleProducts.slice(0, 2)}
          columns={productColumns}
          size="sm"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Medium Size (Default)</h3>
        <DataTable
          data={sampleProducts.slice(0, 2)}
          columns={productColumns}
          size="md"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Large Size</h3>
        <DataTable
          data={sampleProducts.slice(0, 2)}
          columns={productColumns}
          size="lg"
        />
      </div>
    </div>
  ),
};

export const EmptyState: Story = {
  render: ControlledTable,
  args: {
    data: [],
    columns: userColumns,
    emptyText: 'No users found',
  },
};

export const LoadingState: Story = {
  render: ControlledTable,
  args: {
    data: sampleUsers,
    columns: userColumns,
    loading: true,
  },
};

export const CustomEmpty: Story = {
  render: ControlledTable,
  args: {
    data: [],
    columns: productColumns,
    emptyText: 'No products available at the moment',
  },
};