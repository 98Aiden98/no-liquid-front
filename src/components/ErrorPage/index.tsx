import css from "./index.module.scss";
export const ErrorPage = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {

  return (
    <div className={css.errorPage}>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};
