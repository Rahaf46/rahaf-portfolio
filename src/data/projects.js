const baseUrl = import.meta.env.BASE_URL;
export const projects = [
  {
    id: "nexdc",
    name: "NexDC",
    image: `${baseUrl}/nexdc-dashboard.png`,
    github: "https://github.com/Rahaf46/NexDC",
    description: {
      ar: "لوحة تحكم لمركز بيانات لمتابعة البنية التحتية والعقد والطاقة وأنظمة التبريد.",
      en: "A data center dashboard for monitoring infrastructure, nodes, power, and cooling.",
    },
    technologies: ["React", "JavaScript", "CSS"],
    details: {
      problem: {
        ar: "الحاجة إلى منصة موحدة لإدارة ومراقبة البنية التحتية لمراكز البيانات.",
        en: "The need for a unified platform to manage and monitor data center infrastructure.",
      },
      role: {
        ar: "تطوير الواجهة الأمامية بالكامل بشكل مستقل باستخدام React.",
        en: "Independently developed the entire frontend using React.",
      },
      solution: {
        ar: "بناء واجهة تشمل لوحة التحكم والعقد والتنبيهات والمهام والطاقة والتبريد والتخزين والشبكات والإعدادات.",
        en: "Built an interface covering the dashboard, nodes, alerts, jobs, power and cooling, storage, network, and settings.",
      },
      result: {
        ar:  "استكمال تطوير الواجهة الأمامية، مع إمكانية توسيع المشروع مستقبلًا بإضافة الخادم وقاعدة البيانات.",
        en: "Completed the frontend, with plans to develop the backend and database in the future.",
      },
    },
  },
  {
    id: "digital-library",
    name: "Digital Library System",
    image: `${baseUrl}/digital-library.png`,
    github: "https://github.com/Rahaf46/digital-library-system",
    description: {
      ar: "نظام مكتبة رقمية لإدارة الكتب، يشمل إضافتها وعرضها وتعديلها وحذفها وتصفيتها حسب التصنيف.",
      en: "A digital library system for managing books, including adding, viewing, updating, deleting, and filtering books by category.",
    },
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    details: {
      problem: {
        ar: "الحاجة إلى نظام رقمي يساعد على تنظيم الكتب وإدارتها بكفاءة.",
        en: "The need for a digital system to organize and manage books efficiently.",
      },
      role: {
        ar: "تطوير الواجهة الخلفية وقاعدة البيانات بشكل مستقل.",
        en: "Independently developed the backend and database.",
      },
      solution: {
        ar: "بناء REST API باستخدام Node.js وExpress.js، وربطه بـ MongoDB Atlas باستخدام Mongoose، مع تنفيذ عمليات إضافة الكتب وعرضها وتعديلها وحذفها وتصفيتها حسب التصنيف.",
        en: "Built a REST API using Node.js and Express.js, connected to MongoDB Atlas with Mongoose, supporting adding, viewing, updating, deleting, and filtering books by category.",
      },
      result: {
        ar: "تنفيذ عمليات API المطلوبة واختبار المسارات باستخدام Thunder Client والتأكد من عملها بنجاح.",
        en: "Implemented the required API operations and successfully tested the routes using Thunder Client.",
      },
    },
  },
  {
    id: "quick-notes",
    name: "Quick Notes",
    image: `${baseUrl}/quick-notes.png`,
    github: "https://github.com/Rahaf46/quick-notes-app",
    description: {
      ar: "تطبيق للملاحظات يتيح للمستخدم إنشاء الملاحظات وإدارتها.",
      en: "A notes application that allows users to create and manage notes.",
    },
    technologies: ["React", "useState", "useEffect"],
    details: {
      problem: {
        ar: "الحاجة إلى تطبيق بسيط يساعد على تدوين الملاحظات وتنظيمها والعودة إليها لاحقًا.",
        en: "The need for a simple application to create, organize, and revisit notes.",
      },
      role: {
        ar: "تطوير التطبيق بشكل مستقل باستخدام React.",
        en: "Independently developed the application using React.",
      },
      solution: {
        ar: "إنشاء تطبيق يتيح إضافة الملاحظات وتعديلها وحذفها، مع استخدام useState لإدارة البيانات وuseEffect مع localStorage لحفظ الملاحظات واستعادتها.",
        en: "Built an application that allows users to add, edit, and delete notes, using useState for state management and useEffect with localStorage for data persistence.",
      },
      result: {
        ar: "تطوير تطبيق تفاعلي يحفظ الملاحظات محليًا، ويتيح استعادتها عند إعادة فتح التطبيق.",
        en: "Created an interactive application that preserves notes locally, even after closing and reopening the page.",
      },
    },
  },
  {
    id: "mini-store",
    name: "Mini Store Catalog",
    image: `${baseUrl}/mini-store.png`,
    github: "https://github.com/Rahaf46/mini-store-catalog",
    description: {
      ar: "متجر مصغر لاستعراض المنتجات وإدارة سلة التسوق.",
      en: "A mini online store that allows users to browse products and manage their shopping cart.",
    },
    technologies: ["React", "React Router", "Context API"],
    details: {
      problem: {
        ar: "الحاجة إلى متجر إلكتروني مصغر يتيح للمستخدم استعراض المنتجات ومعرفة تفاصيلها وإدارتها ضمن سلة تسوق.",
        en: "The need for a mini online store where users can browse products, view their details, and manage a shopping cart.",
      },
      role: {
        ar: "تطوير التطبيق بشكل مستقل باستخدام React.",
        en: "Independently developed the application using React.",
      },
      solution: {
        ar: "بناء متجر يتيح استعراض المنتجات وعرض تفاصيلها وإضافة المنتجات إلى سلة التسوق وحذفها، مع استخدام React Router للتنقل وContext API لإدارة حالة السلة.",
        en: "Built a store with product browsing, product details, and shopping cart features, using React Router for navigation and Context API for cart state management.",
      },
      result: {
        ar: "إنشاء تطبيق متجر تفاعلي يحدّث عدد المنتجات والإجمالي تلقائيًا.",
        en: "Created an interactive store application that automatically updates the cart item count and total price.",
      },
    },
  },
];
