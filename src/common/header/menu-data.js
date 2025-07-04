const menu_data = [
    {
      id: 1,
      has_dropdown: false,
      title: "Home",
      link: "/",
      sub_menus: [
        // { link: "/", title: "Home One" },
        // { link: "/home-two", title: "Home Two" },
        // { link: "/home-three", title: "Home Three" },
        // { link: "/home-four", title: "Home Four" },
      ],
    },
    {
      id: 2,
      mega_menu: false,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
    },
    {
      id: 3,
      has_dropdown: false,
      title: "About Us",
      link: "/about",
    },
    {
      id: 4,
      has_dropdown: false,
      // title: "Page",
      link: "#",
      sub_menus: [
        { link: "/service", title: "Services" },
        { link: "/service-details", title: "Service Details" },
        { link: "/testimonial", title: "Testimonial" },
        { link: "/team", title: "Team" },
        { link: "/case-study", title: "Case Study" },
        { link: "/pricing", title: "Pricing Plan" },
        { link: "/faq", title: "FAQ's" },
        { link: "/error", title: "Error" },
      ],
    },
    {
      id: 5,
      mega_menu: false,
      has_dropdown: false,
      // title: "Blog",
      link: "#",
      sub_menus: [
        { link: "/blog", title: "Blog" },
        { link: "/blog-details", title: "Blog Details" },
      ],
    },
    
  ];
  export default menu_data;