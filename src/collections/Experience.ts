import type { CollectionConfig } from "payload";

export const Experience: CollectionConfig = {
  slug: "experience",
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["role", "company", "startDate", "order"],
    useAsTitle: "role",
  },
  fields: [
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "startDate",
      type: "date",
      required: true,
    },
    {
      name: "endDate",
      type: "date",
    },
    {
      name: "currentlyWorking",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "highlights",
      type: "array",
      fields: [
        {
          name: "item",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};
