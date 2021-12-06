import { Button } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "../MovieManagement/MyField";

interface Values {
    screenName?: string,
    movieName: string,
    roomNumber: number,
    date: string,
    soldTickets: number,
    occupiedSeats: number,
}

interface Props {
    onSubmit: (values: Values) => void;
}

export const MyFormScreen: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ movieName: '', roomNumber: 0, date: '', soldTickets: 0, occupiedSeats: 0 }}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}
        >
                <Form>
                <div>
                        <Field
                            name="roomNumber"
                            type="number"
                            placeholder="room number"
                            component={MyField} />
                    </div>
                    <div>
                        <Field
                            name="movieName"
                            type="text"
                            placeholder="movie title"
                            component={MyField} />
                    </div>                    
                    <div>
                        <Field
                            name="date"
                            type="text"
                            placeholder="date"
                            component={MyField} />
                    </div>
                    <div>
                        <Field
                            name="soldTickets"
                            type="number"
                            placeholder="sold tickets"
                            component={MyField} />
                    </div>
                    <div>
                        <Field
                            name="occupiedSeats"
                            type="number"
                            placeholder="occupied seats"
                            component={MyField} />
                    </div>
                    <Button variant='contained' type="submit">submit</Button>
                </Form>
        </Formik>
    );
};