
export const copyText = (text: string): void => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Пароль скопирован в буфер обмена');
    }).catch((err) => {
      console.error('Ошибка при копировании:', err);
    });
  }
  