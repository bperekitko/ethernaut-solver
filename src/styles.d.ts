// For SCSS
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// For CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// For SCSS Modules
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
