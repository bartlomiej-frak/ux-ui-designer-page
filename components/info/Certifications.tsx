import { CertificationsProps } from "./info-types";

export const Certifications = ({
  fields,
}: {
  fields: CertificationsProps[];
}) => {
  return (
    <section>
      {fields.map((field) => (
        <div key={field.id} className="my-10">
          <h2 className="text-[20px]">{field.certificate}</h2>
          <p className="my-2 text-[18px] text-gray-secondary">
            {field.details}
          </p>
        </div>
      ))}
    </section>
  );
};
