import { Button, TextField } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "./MyField";

interface Values {
    title: string;
    type: string;
    duration: number;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ title: '', type: '', duration: 0}}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name="title"
              type="text"
              placeholder="title"
              component={MyField}
            />
          </div>
          <div>
            <Field
              name="type"
              type="text"
              placeholder="type"
              component={MyField}
            />
          </div>
          <div>
            <Field
              name="duration"
              type="number"
              placeholder="duration"
              component={MyField}
            />
          </div>
          <Button type="submit">submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};