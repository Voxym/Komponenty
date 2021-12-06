import { Button } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "./MyField";

interface Values {
  name: string;
  type: string;
  duration: number;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyFormMovie: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', type: '', duration: 0 }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div>
          <Field
            name="name"
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
        <Button variant='contained' type="submit">submit</Button>
      </Form>
    </Formik>
  );
};