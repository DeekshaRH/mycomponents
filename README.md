# React Component Library

A modern, accessible React component library built with TypeScript, Tailwind CSS, and Storybook. This project showcases two main components: **InputField** and **DataTable**, designed for real-world applications.

## 🚀 Live Demo

- **Main Application**: [View Live Demo](https://lovable.dev/projects/6e218af5-cc4d-4308-bd54-d080fa2aed2e)
- **Component Demo**: Navigate to `/demo` to see interactive examples
- **Storybook**: Run `npm run storybook` for detailed component documentation

## 📦 Components

### InputField
A flexible input component with comprehensive features:

- **Variants**: `filled`, `outlined`, `ghost`
- **Sizes**: `sm`, `md`, `lg`
- **States**: normal, disabled, invalid, loading
- **Features**: password toggle, clear button, validation states
- **Types**: text, email, password, number, tel, url

```tsx
<InputField
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  variant="outlined"
  size="md"
  clearable
  onClear={() => setValue('')}
/>
```

### DataTable
A powerful data table component with:

- **Sorting**: Click column headers to sort data
- **Selection**: Single/multiple row selection with "select all"
- **States**: loading, empty state with custom messages
- **Customization**: Custom cell rendering, alignment, column widths
- **Responsive**: Mobile-friendly design

```tsx
<DataTable
  data={users}
  columns={userColumns}
  selectable
  onRowSelect={setSelectedRows}
  size="md"
/>
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Storybook** - Component documentation
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

## 🎨 Design System

The library implements a comprehensive design system with:

- **Semantic color tokens** (HSL-based)
- **Consistent spacing and typography**
- **Light/dark theme support**
- **Accessible focus states**
- **Smooth transitions and animations**

## 📁 Project Structure

```
src/
├── components/
│   ├── library/           # Main components
│   │   ├── InputField.tsx
│   │   ├── InputField.stories.tsx
│   │   ├── DataTable.tsx
│   │   └── DataTable.stories.tsx
│   └── ui/               # Base UI components (shadcn)
├── pages/
│   ├── Index.tsx         # Landing page
│   └── ComponentDemo.tsx # Interactive demo
├── lib/
│   └── utils.ts          # Utility functions
├── hooks/                # Custom hooks
└── index.css            # Design system tokens
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-component-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Run Storybook** (for component documentation)
   ```bash
   npm run storybook
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook for deployment

## 🎯 Features

### InputField Features
- ✅ Multiple variants (filled, outlined, ghost)
- ✅ Three sizes (sm, md, lg)
- ✅ Validation states with error messages
- ✅ Loading state with spinner
- ✅ Password toggle functionality
- ✅ Clear button option
- ✅ Helper text support
- ✅ Proper TypeScript interfaces
- ✅ Accessibility (ARIA labels, focus management)

### DataTable Features
- ✅ Column sorting (asc/desc/none)
- ✅ Row selection (single/multiple)
- ✅ Custom cell rendering
- ✅ Loading and empty states
- ✅ Responsive design
- ✅ Customizable row keys
- ✅ Selection summary
- ✅ Three sizes (sm, md, lg)

## 🎨 Design Philosophy

This component library follows modern design principles:

- **Consistency**: Unified design tokens across all components
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized for minimal re-renders
- **Flexibility**: Highly customizable without breaking core functionality
- **Developer Experience**: Full TypeScript support with comprehensive interfaces

## 📖 Component Documentation

Each component includes:

- **TypeScript interfaces** with detailed prop descriptions
- **Storybook stories** with interactive examples
- **Accessibility considerations**
- **Usage examples** and best practices

## 🧪 Testing

The project includes basic testing setup. Components are designed with testability in mind:

- Semantic HTML structure
- Proper ARIA labels
- Predictable state management
- Clear component interfaces

## 🚢 Deployment

### Production Build
```bash
npm run build
```

### Storybook Deployment
```bash
npm run build-storybook
```

Deploy the built Storybook to services like:
- [Chromatic](https://chromatic.com)
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)

## 🤝 Contributing

This is an assignment project, but the structure supports easy extension:

1. Follow the existing component structure
2. Add TypeScript interfaces
3. Include Storybook stories
4. Use the established design system
5. Maintain accessibility standards

## 📝 Assignment Requirements

This project fulfills all assignment requirements:

- ✅ **InputField Component** with all specified features
- ✅ **DataTable Component** with sorting and selection
- ✅ **TypeScript** with proper interfaces
- ✅ **Responsive Design** for all components
- ✅ **Accessibility** with ARIA labels
- ✅ **Modern Styling** with Tailwind CSS
- ✅ **Storybook Documentation** with interactive examples
- ✅ **Clean Architecture** with scalable structure

## 🎉 Demo Features

The demo page (`/demo`) showcases:

- All InputField variants and states
- Interactive DataTable with real data
- Form validation examples
- Responsive design across devices
- Dark/light theme compatibility

## 📄 License

This project is created for educational/assignment purposes.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**