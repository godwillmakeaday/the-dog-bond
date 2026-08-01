type SelectFieldProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: readonly string[];
  optionalLabel?: string;
};

export function SelectField({ label, value, setValue, options, optionalLabel }: SelectFieldProps) {
  return (
    <label className="block rounded-2xl border border-earth-200 bg-white p-5">
      <span className="text-sm font-bold uppercase tracking-[0.18em] text-earth-500">{label}</span>
      <select value={value} onChange={(event) => setValue(event.target.value)} className="mt-3 w-full rounded-xl border border-earth-200 bg-earth-50 px-4 py-3 text-earth-900">
        {optionalLabel ? <option value="">{optionalLabel}</option> : null}
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
