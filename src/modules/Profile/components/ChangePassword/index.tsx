import React from "react";
import Button from "ui/Button";
import { Card, CardActions, CardHeader, CardTitle } from "ui/Card";
import Input from "ui/Input";
import { Fields } from "./styles";

export default function ChangePassword() {
  return (
    <Card>
      <CardHeader>
        <CardTitle title="Change Password" />
      </CardHeader>

      <Fields>
        <Input
          type="password"
          label="Old Password"
          placeholder="Old Password"
        />
        <Input
          type="password"
          label="New Password"
          placeholder="New Password"
        />
        <Input
          type="password"
          label="Confirm new password"
          placeholder="Confirm new password"
        />
      </Fields>

      <CardActions>
        <Button>Update</Button>

        <Button color="secondary">Cancel</Button>
      </CardActions>
    </Card>
  );
}
