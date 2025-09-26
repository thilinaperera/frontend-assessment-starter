import { Clock, CheckSquare, Zap, Code, Palette, Play } from "lucide-react";
import { TaskDashboard } from "@/components/task-dashboard";

const requirements = [
  {
    icon: <Code className="h-5 w-5" />,
    title: "Core Implementation",
    time: "35 min",
    items: [
      "Task CRUD operations",
      "TypeScript interfaces",
      "Form validation",
      "State management",
    ],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Animations & Interactions",
    time: "15 min",
    items: [
      "Framer Motion animations",
      "Micro-interactions",
      "Hover states",
      "Transition feedback",
    ],
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Design & UX",
    time: "10 min",
    items: [
      "Tailwind CSS styling",
      "Responsive design",
      "Accessibility",
      "Visual hierarchy",
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Clock className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-900">
              60 Minutes Assessment
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Frontend Take-Home Assessment
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Build an{" "}
            <span className="font-semibold text-indigo-600">
              Interactive Task Dashboard
            </span>{" "}
            that showcases your React, TypeScript, and animation skills.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full bg-white/80 px-3 py-1 font-medium text-gray-700">
              React 18+
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1 font-medium text-gray-700">
              TypeScript
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1 font-medium text-gray-700">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1 font-medium text-gray-700">
              Framer Motion
            </span>
          </div>
        </header>

        {/* Quick Start */}
        <div className="mb-8 rounded-xl border bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center gap-3">
            <Play className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900">Quick Start</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-medium text-gray-900">Your Challenge</h3>
              <p className="mb-4 text-sm text-gray-600">
                Replace this starter page with a fully functional task dashboard
                that includes task creation, completion, deletion, and smooth
                animations.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckSquare className="h-4 w-4" />
                <span>
                  Task interface already defined in{" "}
                  <code className="rounded bg-gray-100 px-1 text-xs">
                    src/types/index.ts
                  </code>
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <h4 className="mb-2 font-medium text-gray-900">
                Development Server
              </h4>
              <div className="rounded bg-gray-900 p-3 text-sm">
                <code className="text-green-400">npm run dev</code>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Server should already be running on localhost:5173
              </p>
            </div>
          </div>
        </div>

        {/* Requirements Overview */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600">
                  {req.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{req.title}</h3>
                  <span className="text-sm text-gray-500">{req.time}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {req.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Current Progress */}
        <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Your Implementation Space
          </h2>
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-2 text-center">
            <TaskDashboard />
          </div>
        </div>

        {/* Key Files */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Key Files to Know
          </h2>
          <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded bg-gray-50 p-3">
              <code className="font-medium text-blue-600">
                src/types/index.ts
              </code>
              <p className="mt-1 text-gray-600">Task interface & types</p>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <code className="font-medium text-blue-600">
                src/components/ui/
              </code>
              <p className="mt-1 text-gray-600">Reusable UI components</p>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <code className="font-medium text-blue-600">
                src/utils/index.ts
              </code>
              <p className="mt-1 text-gray-600">Utility functions</p>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <code className="font-medium text-blue-600">
                tailwind.config.js
              </code>
              <p className="mt-1 text-gray-600">Styling configuration</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            📖 Full requirements and evaluation criteria are in the{" "}
            <code className="rounded bg-gray-100 px-1">README.md</code>
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Good luck! We're excited to see what you build.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
