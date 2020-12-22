import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

export default function showError() {
  error({
    title: false,
    text: 'Too many mathces found. Please enter a more specific query.',
    sticker: false,
  });
}
