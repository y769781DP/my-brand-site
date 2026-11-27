"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            shadcn/ui 组件渲染测试
          </h1>
          <p className="text-sm text-muted-foreground">
            本页面用于验证 button / card / input / label / textarea 是否正常渲染
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>联系我们</CardTitle>
            <CardDescription>
              填写下面的表单，提交后会显示你输入的内容。
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">姓名</Label>
                <Input
                  id="name"
                  placeholder="请输入姓名"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">留言</Label>
                <Textarea
                  id="message"
                  placeholder="想说的话…"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={4}
                />
              </div>

              {submitted && (
                <div className="rounded-md border border-input bg-muted p-3 text-sm text-foreground">
                  <p className="font-medium">提交成功（演示，未发送到服务器）</p>
                  <p className="mt-1 text-muted-foreground">
                    姓名：{name || "（空）"} ｜ 邮箱：{email || "（空）"} ｜
                    留言：{message || "（空）"}
                  </p>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={handleReset}>
                重置
              </Button>
              <Button type="submit">提交</Button>
            </CardFooter>
          </form>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          若按钮、边框、背景色和输入框样式正常，说明主题变量与组件均已生效。
        </p>
      </div>
    </main>
  );
}
