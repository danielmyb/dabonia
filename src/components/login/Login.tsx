import React, { PureComponent } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Form, Table } from "react-bootstrap";
import authService from "../../database/authService";

interface LoginProps extends WithTranslation {}

interface LoginState {
  username: string;
  password: string;
}

class Login extends PureComponent<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = { username: "", password: "" };
  }

  async componentDidMount() {
    const user = authService.getUser();
    if (user && user.providerType === "local-userpass") {
      await authService.logout();
      window.location.href = "/login";
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>, source: "username" | "password") => {
    const value = e.target.value;

    if (source === "username") {
      this.setState({ username: value });
    } else {
      this.setState({ password: value });
    }
  };

  submitLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      await authService.login(username, password);
      window.location.href = "/";
    } catch (exp) {
      console.error("LOGIN FAILED", exp);
    }
  };

  render() {
    const { t } = this.props;

    return (
      <div className="m-4">
        <Form>
          <Table>
            <tbody>
              <tr>
                <td className="w-50 text-right align-middle">
                  <span className="mr-2 text-white">{t("login")}</span>
                </td>
                <td>
                  <input className="form-text" type="text" onChange={e => this.onChange(e, "username")} />
                </td>
              </tr>
              <tr>
                <td className="w-50 text-right align-middle">
                  <span className="mr-2 text-white">{t("password")}</span>
                </td>
                <td>
                  <input className="form-text" type="password" onChange={e => this.onChange(e, "password")} />
                </td>
              </tr>
            </tbody>
          </Table>
          <button className="btn btn-primary" onClick={e => this.submitLogin(e)}>
            {t("submitLogin")}
          </button>
        </Form>
      </div>
    );
  }
}

export default withTranslation("login")(Login);
