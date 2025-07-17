import { RiCheckboxCircleLine, RiCloseCircleLine } from "@remixicon/react";

const PasswordCriteria = ({ password }: { password: string }) => {
  const criteria = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    {
      label: "Contains special character",
      met: /^[^\s]+$/.test(password) && /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <div className="space-y-1">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-xs">
          {item.met ? (
            <RiCheckboxCircleLine className="text-green-500" />
          ) : (
            <RiCloseCircleLine className="text-red-500" />
          )}
          <span className={item.met ? "text-green-500" : "text-gray-500"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password }: { password: string }) => {
  const getStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    // if (pass.match(/[^a-zA-Z\d]/)) strength++;
    if (pass.match(/^[^\s]+$/) && pass.match(/[^A-Za-z0-9]/)) strength++;

    return strength;
  };
  const strength = getStrength(password);

  const getColor = (strength: number) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-red-400";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-yellow-400";
    return "bg-green-500";
  };

  const getStrengthText = (strength: number) => {
    const strengths = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

    if (strength >= 0 && strength <= 3) return strengths?.[strength];
    return "Strong";
  };

  return (
    <div className="space-y-3 transition-all duration-700">
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-600">Password strength</span>
        <span className="text-xs text-gray-600">
          {getStrengthText(strength)}
        </span>
      </div>

      <div className="flex space-x-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 
                ${index < strength ? getColor(strength) : "bg-slate-200"}
              `}
          />
        ))}
      </div>

      <PasswordCriteria password={password} />
    </div>
  );
};
export default PasswordStrengthMeter;
