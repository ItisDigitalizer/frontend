const EXCEL_MIME_TYPES = [
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

export const validateExcelFile = (file: File) => {
  const isValid = EXCEL_MIME_TYPES.includes(file.type) || file.name.endsWith('.xls') || file.name.endsWith('.xlsx');
  return isValid ? null : 'Поддерживаются только файлы .xls и .xlsx';
};
