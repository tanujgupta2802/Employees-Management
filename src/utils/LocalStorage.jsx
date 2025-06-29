export const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create layout for homepage.",
        taskDate: "2025-06-30",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile nav collapse issue.",
        taskDate: "2025-06-29",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Test Footer",
        taskDescription: "Ensure footer works on all pages.",
        taskDate: "2025-07-01",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Create API",
        taskDescription: "Build authentication API.",
        taskDate: "2025-06-28",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write Docs",
        taskDescription: "Document login endpoints.",
        taskDate: "2025-06-30",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Fix 500 Error",
        taskDescription: "Resolve issue when saving form.",
        taskDate: "2025-06-29",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Client Feedback",
        taskDescription: "Collect feedback from client review.",
        taskDate: "2025-07-01",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "UI Adjustments",
        taskDescription: "Adjust margins and paddings.",
        taskDate: "2025-06-30",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Performance Check",
        taskDescription: "Optimize bundle size.",
        taskDate: "2025-06-29",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Logo Redesign",
        taskDescription: "Propose new logo ideas.",
        taskDate: "2025-07-02",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Accessibility Audit",
        taskDescription: "Check for WCAG compliance.",
        taskDate: "2025-06-30",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Color Theme Update",
        taskDescription: "Implement new theme colors.",
        taskDate: "2025-06-28",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Deploy on Vercel",
        taskDescription: "Set up continuous deployment.",
        taskDate: "2025-06-29",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Git Cleanup",
        taskDescription: "Delete unused branches.",
        taskDate: "2025-06-30",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Security Patch",
        taskDescription: "Update packages with vulnerabilities.",
        taskDate: "2025-07-01",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];
const admin = {
  id: 101,
  email: "admin@example.com",
  password: "123",
};
export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

export const updateEmployeeTasks = (email, newTask) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const updatedEmployees = employees.map((emp) => {
    if (emp.email === email) {
      return {
        ...emp,
        tasks: [...emp.tasks, newTask],
      };
    }
    return emp;
  });

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
};
