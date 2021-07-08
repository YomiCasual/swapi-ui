type TypographyProps = {
  variant?: any;

  classes?: string;
  children: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
};

const Typography: React.FC<TypographyProps> = (props) => {
  const { variant = "p", children, classes, ...other } = props;
  const Component = variant;
  return (
    <Component className={classes} {...other}>
      {children}
    </Component>
  );
};

export default Typography;
