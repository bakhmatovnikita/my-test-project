import { useState } from "react";
import { copyText } from "../../utils/copyText";
import { PasswordOptions } from "./types";
import { CopyOutlined } from "@ant-design/icons";

export const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState("");
  const [options, setOptions] = useState<PasswordOptions>({
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
    avoidRepetition: false,
  });
  const [generatedPasswords, setGeneratedPasswords] = useState<string[]>([]);

  const handleOptionChange = (
    option: keyof PasswordOptions,
    value: boolean
  ) => {
    setOptions((prev) => ({ ...prev, [option]: value }));
  };

  const generatePasswords = () => {
    const chars = [];
    if (options.useUppercase) chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (options.useLowercase) chars.push(..."abcdefghijklmnopqrstuvwxyz");
    if (options.useNumbers) chars.push(..."0123456789");
    if (options.useSymbols) chars.push("%", "*", ")", "?", "@", "#", "$", "~");

    const passwords: string[] = [];

    for (let i = 0; i < 5; i++) {
      let password = "";
      for (let j = 0; j < parseInt(passwordLength); j++) {
        let charIndex = Math.floor(Math.random() * chars.length);
        password += chars[charIndex];

        if (options.avoidRepetition && password.includes(chars[charIndex])) {
          j--;
        }
      }
      passwords.push(password);
    }

    setGeneratedPasswords(passwords);
  };

  return (
    <div className="password-generator">
      <div className="input-block">
        <h2>Параметры пароля</h2>
        <label>
          Длина пароля:
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            placeholder="Введите число"
          />
        </label>

        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={options.useUppercase}
              onChange={(e) =>
                handleOptionChange("useUppercase", e.target.checked)
              }
            />
            Использовать прописные буквы
          </label>

          <label>
            <input
              type="checkbox"
              checked={options.useLowercase}
              onChange={(e) =>
                handleOptionChange("useLowercase", e.target.checked)
              }
            />
            Использовать строчные буквы
          </label>

          <label>
            <input
              type="checkbox"
              checked={options.useNumbers}
              onChange={(e) =>
                handleOptionChange("useNumbers", e.target.checked)
              }
            />
            Использовать цифры
          </label>

          <label>
            <input
              type="checkbox"
              checked={options.useSymbols}
              onChange={(e) =>
                handleOptionChange("useSymbols", e.target.checked)
              }
            />
            Использовать символы: %, *, ), ?, @, #, $, ~
          </label>

          <label>
            <Inp
              type="checkbox"
              checked={options.avoidRepetition}
              onChange={(e) =>
                handleOptionChange("avoidRepetition", e.target.checked)
              }
            />
            Избегать повторения символов
          </label>
        </div>

        <button onClick={generatePasswords}>Сгенерировать пароли</button>
      </div>

      <div className="generated-passwords">
        <h2>Сгенерированные пароли</h2>
        {generatedPasswords.map((password, index) => (
          <div key={index} className="password-item">
            <span>{password}</span>
            <CopyOutlined onClick={() => copyText(password)} />
          </div>
        ))}
      </div>
    </div>
  );
};
