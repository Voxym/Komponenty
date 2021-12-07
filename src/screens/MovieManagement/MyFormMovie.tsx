import { Button } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "./MyField";

interface Values {
  name: string;
  coverUrl: string;
  description: string;
  type: string;
  duration: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyFormMovie: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '',coverUrl: '',description: '', type: '', duration: '' }}
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
                            name="coverUrl"
                            type="string"
                            placeholder="url for image"
                            component={MyField} />
                    </div>
                    <div>
                        <Field
                            name="description"
                            type="string"
                            placeholder="description"
                            component={MyField} />
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
        <Button variant='contained' type="submit">Add Movie</Button>
      </Form>
    </Formik>
  );
};