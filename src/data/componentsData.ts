import type { ComponentInfo } from '../types';
import CounterDemo from '../components/demos/CounterDemo';
import FormDemo from '../components/demos/FormDemo';
import CardDemo from '../components/demos/CardDemo';
import TodoDemo from '../components/demos/TodoDemo';
import ToggleDemo from '../components/demos/ToggleDemo';
import ColorPickerDemo from '../components/demos/ColorPickerDemo';

export const componentsData: ComponentInfo[] = [
  {
    id: 1,
    name: 'Counter',
    description: 'A simple counter with increment and decrement buttons',
    category: 'Buttons',
    component: CounterDemo
  },
  {
    id: 2,
    name: 'Contact Form',
    description: 'Form with validation and submit handling',
    category: 'Forms',
    component: FormDemo
  },
  {
    id: 3,
    name: 'Profile Card',
    description: 'Expandable card showing user information',
    category: 'Cards',
    component: CardDemo
  },
  {
    id: 4,
    name: 'Todo List',
    description: 'Add, complete, and delete todo items',
    category: 'Data Display',
    component: TodoDemo
  },
  {
    id: 5,
    name: 'Toggle Switch',
    description: 'Interactive toggle button with state',
    category: 'Buttons',
    component: ToggleDemo
  },
  {
    id: 6,
    name: 'Color Picker',
    description: 'Select colors from a predefined palette',
    category: 'Buttons',
    component: ColorPickerDemo
  }
];
