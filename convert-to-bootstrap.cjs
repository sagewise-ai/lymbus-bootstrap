#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Tailwind to Bootstrap class mappings
const classMap = {
  // Layout & Display
  'flex': 'd-flex',
  'inline-flex': 'd-inline-flex',
  'block': 'd-block',
  'inline-block': 'd-inline-block',
  'inline': 'd-inline',
  'hidden': 'd-none',
  'grid': 'd-grid',
  
  // Flex direction
  'flex-row': 'flex-row',
  'flex-row-reverse': 'flex-row-reverse',
  'flex-col': 'flex-column',
  'flex-col-reverse': 'flex-column-reverse',
  
  // Flex wrap
  'flex-wrap': 'flex-wrap',
  'flex-nowrap': 'flex-nowrap',
  'flex-wrap-reverse': 'flex-wrap-reverse',
  
  // Justify content
  'justify-start': 'justify-content-start',
  'justify-end': 'justify-content-end',
  'justify-center': 'justify-content-center',
  'justify-between': 'justify-content-between',
  'justify-around': 'justify-content-around',
  'justify-evenly': 'justify-content-evenly',
  
  // Align items
  'items-start': 'align-items-start',
  'items-end': 'align-items-end',
  'items-center': 'align-items-center',
  'items-baseline': 'align-items-baseline',
  'items-stretch': 'align-items-stretch',
  
  // Align self
  'self-start': 'align-self-start',
  'self-end': 'align-self-end',
  'self-center': 'align-self-center',
  'self-stretch': 'align-self-stretch',
  
  // Flex grow/shrink
  'flex-1': 'flex-fill',
  'flex-auto': 'flex-fill',
  'flex-initial': '',
  'flex-none': 'flex-shrink-0',
  'grow': 'flex-grow-1',
  'grow-0': 'flex-grow-0',
  'shrink': 'flex-shrink-1',
  'shrink-0': 'flex-shrink-0',
  
  // Spacing
  'm-0': 'm-0', 'm-1': 'm-1', 'm-2': 'm-2', 'm-3': 'm-3', 'm-4': 'm-4', 'm-5': 'm-5',
  'mx-auto': 'mx-auto',
  'p-0': 'p-0', 'p-1': 'p-1', 'p-2': 'p-2', 'p-3': 'p-3', 'p-4': 'p-4', 'p-5': 'p-5',
  
  // Width
  'w-full': 'w-100',
  'w-screen': 'w-100',
  'w-auto': 'w-auto',
  'w-1/2': 'w-50',
  'w-1/3': 'w-33',
  'w-2/3': 'w-66',
  'w-1/4': 'w-25',
  'w-3/4': 'w-75',
  
  // Height
  'h-full': 'h-100',
  'h-screen': 'vh-100',
  'h-auto': 'h-auto',
  
  // Position
  'static': 'position-static',
  'fixed': 'position-fixed',
  'absolute': 'position-absolute',
  'relative': 'position-relative',
  'sticky': 'position-sticky',
  
  // Inset
  'inset-0': 'top-0 bottom-0 start-0 end-0',
  'top-0': 'top-0',
  'right-0': 'end-0',
  'bottom-0': 'bottom-0',
  'left-0': 'start-0',
  
  // Overflow
  'overflow-auto': 'overflow-auto',
  'overflow-hidden': 'overflow-hidden',
  'overflow-visible': 'overflow-visible',
  'overflow-scroll': 'overflow-scroll',
  'overflow-clip': 'overflow-hidden',
  
  // Text alignment
  'text-left': 'text-start',
  'text-center': 'text-center',
  'text-right': 'text-end',
  'text-justify': 'text-justify',
  
  // Font weight
  'font-thin': 'fw-light',
  'font-light': 'fw-light',
  'font-normal': 'fw-normal',
  'font-medium': 'fw-medium',
  'font-semibold': 'fw-semibold',
  'font-bold': 'fw-bold',
  'font-extrabold': 'fw-bolder',
  
  // Font style
  'italic': 'fst-italic',
  'not-italic': 'fst-normal',
  
  // Text transform
  'uppercase': 'text-uppercase',
  'lowercase': 'text-lowercase',
  'capitalize': 'text-capitalize',
  'normal-case': 'text-none',
  
  // Text decoration
  'underline': 'text-decoration-underline',
  'line-through': 'text-decoration-line-through',
  'no-underline': 'text-decoration-none',
  
  // Background colors (common)
  'bg-white': 'bg-white',
  'bg-black': 'bg-dark',
  'bg-gray-100': 'bg-light',
  'bg-gray-200': 'bg-light',
  'bg-transparent': 'bg-transparent',
  
  // Text colors (common)
  'text-white': 'text-white',
  'text-black': 'text-dark',
  'text-gray-500': 'text-muted',
  'text-gray-600': 'text-secondary',
  
  // Border
  'border': 'border',
  'border-0': 'border-0',
  'border-t': 'border-top',
  'border-r': 'border-end',
  'border-b': 'border-bottom',
  'border-l': 'border-start',
  'border-solid': 'border-solid',
  
  // Border radius
  'rounded': 'rounded',
  'rounded-sm': 'rounded-1',
  'rounded-md': 'rounded-2',
  'rounded-lg': 'rounded-3',
  'rounded-xl': 'rounded-3',
  'rounded-full': 'rounded-circle',
  'rounded-none': 'rounded-0',
  
  // Shadow
  'shadow': 'shadow',
  'shadow-sm': 'shadow-sm',
  'shadow-md': 'shadow',
  'shadow-lg': 'shadow-lg',
  'shadow-none': 'shadow-none',
  
  // Opacity
  'opacity-0': 'opacity-0',
  'opacity-25': 'opacity-25',
  'opacity-50': 'opacity-50',
  'opacity-75': 'opacity-75',
  'opacity-100': 'opacity-100',
  
  // Cursor
  'cursor-pointer': 'cursor-pointer',
  'cursor-default': 'cursor-default',
  'cursor-not-allowed': 'cursor-not-allowed',
  
  // Pointer events
  'pointer-events-none': 'pe-none',
  'pointer-events-auto': 'pe-auto',
  
  // User select
  'select-none': 'user-select-none',
  'select-text': 'user-select-text',
  'select-all': 'user-select-all',
  
  // Object fit
  'object-contain': 'object-fit-contain',
  'object-cover': 'object-fit-cover',
  'object-fill': 'object-fit-fill',
  'object-none': 'object-fit-none',
  
  // Visibility
  'visible': 'visible',
  'invisible': 'invisible',
};

// Convert Tailwind classes to Bootstrap
function convertClasses(classString) {
  if (!classString) return { classes: '', styles: {} };
  
  const classes = classString.split(/\s+/);
  const bootstrapClasses = [];
  const inlineStyles = {};
  
  classes.forEach(cls => {
    // Handle arbitrary values [value] 
    if (cls.includes('[') && cls.includes(']')) {
      const match = cls.match(/^([a-z-]+)-\[(.*?)\]$/);
      if (match) {
        const [, property, value] = match;
        
        // Convert property to CSS property
        switch(property) {
          case 'w':
            inlineStyles.width = value;
            break;
          case 'h':
            inlineStyles.height = value;
            break;
          case 'min-w':
            inlineStyles.minWidth = value;
            break;
          case 'min-h':
            inlineStyles.minHeight = value;
            break;
          case 'max-w':
            inlineStyles.maxWidth = value;
            break;
          case 'max-h':
            inlineStyles.maxHeight = value;
            break;
          case 'bg':
            inlineStyles.backgroundColor = value;
            break;
          case 'text':
            if (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('rgba')) {
              inlineStyles.color = value;
            } else {
              inlineStyles.fontSize = value;
            }
            break;
          case 'rounded':
            inlineStyles.borderRadius = value;
            break;
          case 'border':
            inlineStyles.borderColor = value;
            break;
          case 'gap':
            inlineStyles.gap = value;
            break;
          case 'p':
            inlineStyles.padding = value;
            break;
          case 'px':
            inlineStyles.paddingLeft = value;
            inlineStyles.paddingRight = value;
            break;
          case 'py':
            inlineStyles.paddingTop = value;
            inlineStyles.paddingBottom = value;
            break;
          case 'pt':
            inlineStyles.paddingTop = value;
            break;
          case 'pr':
            inlineStyles.paddingRight = value;
            break;
          case 'pb':
            inlineStyles.paddingBottom = value;
            break;
          case 'pl':
            inlineStyles.paddingLeft = value;
            break;
          case 'm':
            inlineStyles.margin = value;
            break;
          case 'mx':
            inlineStyles.marginLeft = value;
            inlineStyles.marginRight = value;
            break;
          case 'my':
            inlineStyles.marginTop = value;
            inlineStyles.marginBottom = value;
            break;
          case 'mt':
            inlineStyles.marginTop = value;
            break;
          case 'mr':
            inlineStyles.marginRight = value;
            break;
          case 'mb':
            inlineStyles.marginBottom = value;
            break;
          case 'ml':
            inlineStyles.marginLeft = value;
            break;
          case 'top':
            inlineStyles.top = value;
            break;
          case 'right':
            inlineStyles.right = value;
            break;
          case 'bottom':
            inlineStyles.bottom = value;
            break;
          case 'left':
            inlineStyles.left = value;
            break;
          case 'tracking':
            inlineStyles.letterSpacing = value;
            break;
          case 'leading':
            inlineStyles.lineHeight = value;
            break;
          default:
            console.log(`Unknown arbitrary property: ${property}`);
        }
        return;
      }
    }
    
    // Handle size classes like size-[16px]
    if (cls.startsWith('size-[')) {
      const value = cls.match(/size-\[(.*?)\]/)[1];
      inlineStyles.width = value;
      inlineStyles.height = value;
      return;
    }
    
    // Handle flex-[value]
    if (cls.startsWith('flex-[')) {
      const value = cls.match(/flex-\[(.*?)\]/)[1];
      inlineStyles.flex = value;
      return;
    }
    
    // Map standard classes
    if (classMap[cls]) {
      if (classMap[cls]) {
        bootstrapClasses.push(classMap[cls]);
      }
    } else {
      // Keep unmapped classes as-is (might be custom)
      bootstrapClasses.push(cls);
    }
  });
  
  return {
    classes: bootstrapClasses.filter(Boolean).join(' '),
    styles: inlineStyles
  };
}

// Process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Match className="..." or className='...'
  const classNameRegex = /className=["']([^"']+)["']/g;
  
  content = content.replace(classNameRegex, (match, classes) => {
    const { classes: bootstrapClasses, styles } = convertClasses(classes);
    modified = true;
    
    if (Object.keys(styles).length > 0) {
      // Need to add inline styles
      const styleStr = JSON.stringify(styles)
        .replace(/"/g, "'")
        .replace(/,/g, ', ');
      return `className="${bootstrapClasses}" style={${styleStr}}`;
    }
    
    return `className="${bootstrapClasses}"`;
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Converted: ${filePath}`);
  }
}

// Recursively process directory
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      processFile(filePath);
    }
  });
}

// Start conversion
console.log('Starting Tailwind to Bootstrap conversion...');
processDirectory(path.join(__dirname, 'src'));
console.log('Conversion complete!');
