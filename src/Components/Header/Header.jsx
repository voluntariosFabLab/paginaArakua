import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // Función para renderizar los items
  const itemRenderer = (item) => (
    <Link
      to={item.navigateTo}
      className="flex align-items-center p-menuitem-link"
    >
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
    </Link>
  );

  // Definición de los items del Menubar
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      navigateTo: "/", // Ruta de navegación
      template: itemRenderer,
    },
    {
      label: "Acerca de",
      icon: "pi pi-star",
      navigateTo: "/about", // Ruta de navegación
      template: itemRenderer,
    },
    /* {
      label: "Productos",
      icon: "pi pi-search",
      items: [
        {
          label: "Arakua",
          icon: "pi pi-bolt",
          navigateTo: "/products/arakua", // Añadir rutas específicas si es necesario
          template: itemRenderer,
        },
        {
          label: "Extrusor",
          icon: "pi pi-server",
          navigateTo: "/products/extrusor",
          template: itemRenderer,
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          navigateTo: "/products/ui-kit",
          template: itemRenderer,
        },
        {
          separator: true,
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
              navigateTo: "/products/templates/apollo",
              template: itemRenderer,
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
              badge: 3,
              navigateTo: "/products/templates/ultima",
              template: itemRenderer,
            },
          ],
        },
      ],
    }, */
    {
      label: "Contacto",
      icon: "pi pi-envelope",
      navigateTo: "/contact", // Ruta de navegación
      template: itemRenderer,
    },
  ];

  // Logo de inicio
  const start = (
    <div >
      <Link to="/" className="logo-container" >
      <p>ARAKUAA</p>
      <img
        alt="logo"
        src="https://lh3.googleusercontent.com/a/ACg8ocJhT_rOTs429j-jnxGXISqRWFXiatbP4bhKUEsiAvKgVyCtfX8=s360-c-no"
        height="80"
        className="mr-2"
      ></img>
    </Link>
    </div>
  );

  // Elementos al final del Menubar
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  // Render del componente Header
  return (
    <>
      <div className="card">
        <Menubar model={items}  end={start} />
      </div>
      <Outlet />
    </>
  );
};

export default Header;


/* import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const itemRenderer = (item) => (
    <a
      href={item.navigateTo}
      className="flex align-items-center p-menuitem-link"
    >
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
    </a>
  );
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      navigateTo: "/",
      template: itemRenderer,
    },
    {
      label: "Acerca de",
      icon: "pi pi-star",
      navigateTo: "about",
      template: itemRenderer,
    },
    {
      label: "Productos",
      icon: "pi pi-search",
      items: [
        {
          label: "Arakua",
          icon: "pi pi-bolt",
          template: itemRenderer,
        },
        {
          label: "Extrusor",
          icon: "pi pi-server",
          template: itemRenderer,
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          template: itemRenderer,
        },
        {
          separator: true,
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
              template: itemRenderer,
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
              badge: 3,
              template: itemRenderer,
            },
          ],
        },
      ],
      navigateTo: "/",
    },
    {
      label: "Contácto",
      icon: "pi pi-envelope",
      navigateTo: "/contact",
      template: itemRenderer,
    },
  ];

  const start = (
    <section className="logo-container">
      <p>ARAKUAA</p>
      <img
        alt="logo"
        src="https://lh3.googleusercontent.com/a/ACg8ocJhT_rOTs429j-jnxGXISqRWFXiatbP4bhKUEsiAvKgVyCtfX8=s360-c-no"
        height="80"
        className="mr-2"
      ></img>
    </section>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <>
      <div className="card">
        <Menubar model={items} end={start} />
      </div>
      <Outlet />
    </>
  );
};

export default Header;
 */