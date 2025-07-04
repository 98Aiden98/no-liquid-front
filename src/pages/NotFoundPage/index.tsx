import { ErrorPage } from "../../components/ErrorPage";

export const NotFoundPage = ({
  title = "Not found",
  message = "Page not found",
}: {
  title?: string;
  message?: string;
}) => <ErrorPage title={title} message={message} />;
