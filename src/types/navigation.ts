export interface NavLink {
  label: string;
  href: string;
}

export interface KeyboardEvent {
  key: string;
  preventDefault: () => void;
}
