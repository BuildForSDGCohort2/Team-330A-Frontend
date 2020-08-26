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
} from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

function LoginForm(props) {
  const submitLogin = (data) => {
    // event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append(
      "User-Agent",
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:79.0) Gecko/20100101 Firefox/79.0"
    );
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "en-GB,en;q=0.5");
    myHeaders.append("Referer", "http://localhost:3000/?email=&password=");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("Origin", "http://localhost:3000");
    myHeaders.append("DNT", "1");
    myHeaders.append("Connection", "keep-alive");

    var raw = JSON.stringify({
      email: data.email,
      password: data.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://commerce.test/api/login/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <h1>Login</h1>

      <Row>
        <Form className="mt-3" onSubmit={handleSubmit(submitLogin)} noValidate>
          <FormGroup className={errors.email ? "has-danger" : null}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="john@doe.com"
              innerRef={register}
              invalid={errors.email ? true : false}
            />
            <Label for="exampleEmail">Email</Label>
            {/* {errors.email && "email is required"} */}
            <FormFeedback>{errors.email?.message}</FormFeedback>
          </FormGroup>
          <FormGroup className={errors.password ? "has-danger" : null}>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
              innerRef={register}
              invalid={errors.password ? true : false}
            />
            <Label for="examplePassword">Password</Label>
            <FormFeedback>{errors.password?.message}</FormFeedback>
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
      </Row>
    </Container>
  );
}

export default LoginForm;
