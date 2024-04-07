import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


function buildFormData(formData, data, parentKey='') {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else if (data[parentKey] instanceof File) {
    formData.append(parentKey, data[parentKey], data[parentKey]?.name)
  } else {
    const value = data == null ? '' : data;

    formData.append(parentKey, value);
  }
}

export function jsonToFormData(data) {
  const formData = new FormData();
  
  buildFormData(formData, data);
  
  return formData;
}