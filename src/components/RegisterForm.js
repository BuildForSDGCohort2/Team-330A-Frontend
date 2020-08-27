import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Alert,
  FormFeedback,
  CardHeader,
  CardBody,
  Card,
  Col,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Re-enter password"),
});

function RegisterForm(props) {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const submitRegister = (data) => {
    var myHeaders = new Headers();

    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "en-GB,en;q=0.5");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("DNT", "1");
    myHeaders.append("Connection", "keep-alive");

    var raw = JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://commerce.test/api/register", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg="6" md="8">
          <Card className="mt-3">
            <CardHeader>
              {" "}
              <h1>Register</h1>
            </CardHeader>
            <CardBody>
              <Form
                className="mt-3"
                onSubmit={handleSubmit(submitRegister)}
                noValidate
              >
                <FormGroup className={errors.name ? "has-danger" : null}>
                  <Input
                    type="text"
                    name="name"
                    id="user-name"
                    placeholder="Alan Turing"
                    innerRef={register}
                    invalid={errors.name ? true : false}
                  />
                  <Label for="user-name">Name</Label>
                  <FormFeedback>{errors.name?.message}</FormFeedback>
                </FormGroup>
                <FormGroup className={errors.email ? "has-danger" : null}>
                  <Input
                    type="email"
                    name="email"
                    id="user-email"
                    placeholder="john@doe.com"
                    innerRef={register}
                    invalid={errors.email ? true : false}
                  />
                  <Label for="user-email">Email</Label>
                  <FormFeedback>{errors.email?.message}</FormFeedback>
                </FormGroup>
                <FormGroup className={errors.password ? "has-danger" : null}>
                  <Input
                    type="password"
                    name="password"
                    id="user-password"
                    placeholder="password"
                    innerRef={register}
                    invalid={errors.password ? true : false}
                  />
                  <Label for="user-password">Password</Label>
                  <FormFeedback>{errors.password?.message}</FormFeedback>
                </FormGroup>

                <FormGroup
                  className={errors.passwordConfirmation ? "has-danger" : null}
                >
                  <Input
                    type="password"
                    name="passwordConfirmation"
                    id="user-password"
                    placeholder="password"
                    innerRef={register}
                    invalid={errors.passwordConfirmation ? true : false}
                  />
                  <Label for="user-password">Confirm Password</Label>
                  <FormFeedback>
                    {errors.passwordConfirmation?.message}
                  </FormFeedback>
                </FormGroup>
                <Button color="primary">Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterForm;
