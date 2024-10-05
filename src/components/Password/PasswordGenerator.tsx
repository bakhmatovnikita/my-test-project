import React, { useState, useCallback } from "react";
import {
  InputNumber,
  Checkbox,
  Button,
  Space,
  Typography,
  Alert,
  message,
} from "antd";
import { CopyOutlined } from "@ant-design/icons";

interface PasswordOptions {
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
  avoidRepetition: boolean;
}

const charOptions = {
  useUppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  useLowercase: "abcdefghijklmnopqrstuvwxyz",
  useNumbers: "0123456789",
  useSymbols: "%*)?@#$~",
};

export const PasswordGenerator: React.FC = () => {
  const [passwordLength, setPasswordLength] = useState<number | undefined>(
    undefined
  );
  const [options, setOptions] = useState<PasswordOptions>({
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
    avoidRepetition: false,
  });
  const [generatedPasswords, setGeneratedPasswords] = useState<string[]>([]);

  const handleOptionChange = useCallback((checkedValues: string[]) => {
    setOptions((prev) => ({
      ...prev,
      useUppercase: checkedValues.includes("useUppercase"),
      useLowercase: checkedValues.includes("useLowercase"),
      useNumbers: checkedValues.includes("useNumbers"),
      useSymbols: checkedValues.includes("useSymbols"),
      avoidRepetition: checkedValues.includes("avoidRepetition"),
    }));
  }, []);

  const generatePasswords = useCallback(() => {
    if (!passwordLength || passwordLength <= 0) {
      message.error("Пожалуйста, укажите длину пароля больше 0");
      return;
    }

    let chars = "";
    Object.entries(charOptions).forEach(([key, value]) => {
      if ((options as any)[key]) chars += value;
    });

    if (chars.length === 0) {
      message.error("Выберите хотя бы один тип символа");
      return;
    }

    const passwords: string[] = [];

    for (let i = 0; i < 5; i++) {
      let password = "";
      const charArray = chars.split("");

      for (let j = 0; j < passwordLength; j++) {
        let charIndex = Math.floor(Math.random() * charArray.length);
        const char = charArray[charIndex];

        if (options.avoidRepetition && password.includes(char)) {
          charArray.splice(charIndex, 1);
          j--;
        } else {
          password += char;
        }
      }

      passwords.push(password);
    }

    setGeneratedPasswords(passwords);

    message.success(`Сгенерировано ${passwords.length} паролей`);
  }, [passwordLength, options]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => message.success(`Текст "${text}" скопирован в буфер обмена`))
      .catch(() =>
        message.error("Не удалось скопировать текст в буфер обмена")
      );
  }, []);

  const PasswordItem = React.memo(({ password }: { password: string }) => (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <Typography.Text style={{ marginRight: "8px" }}>
        {password}
      </Typography.Text>
      <CopyOutlined onClick={() => copyToClipboard(password)} />
    </div>
  ));

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Typography.Title level={3}>Генератор паролей</Typography.Title>

      <Space direction="vertical" style={{ width: "100%" }}>
        <InputNumber
          min={1}
          max={100}
          value={passwordLength}
          onChange={setPasswordLength}
          placeholder="Длина пароля"
          style={{ width: "100%" }}
        />

        <Checkbox.Group
          options={[
            { label: "Использовать прописные буквы", value: "useUppercase" },
            { label: "Использовать строчные буквы", value: "useLowercase" },
            { label: "Использовать цифры", value: "useNumbers" },
            {
              label: "Использовать символы: %, *, ), ?, @, #, $, ~",
              value: "useSymbols",
            },
            { label: "Избегать повторения символов", value: "avoidRepetition" },
          ]}
          defaultValue={[
            "useUppercase",
            "useLowercase",
            "useNumbers",
            "useSymbols",
          ]}
          onChange={handleOptionChange}
        />

        <Button type="primary" onClick={generatePasswords}>
          Сгенерировать пароли
        </Button>
      </Space>

      {generatedPasswords.length > 0 && (
        <div>
          <Typography.Title level={4}>Сгенерированные пароли</Typography.Title>
          {generatedPasswords.map((password, index) => (
            <PasswordItem key={index} password={password} />
          ))}
        </div>
      )}
    </Space>
  );
};
