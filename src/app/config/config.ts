// config.ts
export const config = {
  theme: 'default', // 'dark', 'light', or 'default'etc.
  header: {
    dropdownItems: [
      { label: 'Profile', action: 'profile' },
      { label: 'Logout', action: 'logout' }
    ]
  },
  leftDrawer: {
    headerText: 'Menu',
    descriptionText: 'Select an option',
    menuItems: [
      { label: 'Home', path: '/' },
      { label: 'Builder', path: '/builder' },
      { label: 'Member', path: '/member' }
    ]
  }
};