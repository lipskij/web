import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className, delay }) => (
  <div
    className={`
   bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm
    shadow-lg rounded-lg overflow-hidden
    border border-white border-opacity-20
    flex flex-col
    opacity-0 animate-slideInUp
    ${className}
  `}
    style={{
      animationDelay: `${delay}ms`,
      animationFillMode: "forwards",
    }}
  >
    {children}
  </div>
);

interface CardSectionProps {
  children: ReactNode;
}

const CardHeader: React.FC<CardSectionProps> = ({ children }) => (
  <div className="px-6 py-4 bg-white bg-opacity-5">{children}</div>
);

const CardContent: React.FC<CardSectionProps> = ({ children }) => (
  <div className="px-6 py-4 flex-grow">{children}</div>
);

const CardFooter: React.FC<CardSectionProps> = ({ children }) => (
  <div className="px-6 py-4 bg-white bg-opacity-5">{children}</div>
);

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => (
  <button
    className={`
      w-full px-4 py-2 
      bg-white bg-opacity-10 hover:bg-opacity-20
      text-white rounded transition-colors duration-200
      ${className}
    `}
    onClick={onClick}
  >
    {children}
  </button>
);

const AboutCard: React.FC = () => (
  <Card className="w-64 h-64" delay={400}>
    <CardHeader>
      <h3 className="font-bold text-lg flex items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        About Me
      </h3>
    </CardHeader>
    <CardContent>
      <p className="text-gray-100 text-shadow">
        Front-end developer with a passion for creating beautiful and functional
        user interfaces.
      </p>
    </CardContent>
    <CardFooter>
      <Button>Learn More</Button>
    </CardFooter>
  </Card>
);

const ContactsCard: React.FC = () => (
  <Card className="w-64 h-64" delay={800}>
    <CardHeader>
      <h3 className="font-bold text-lg flex items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        Contact
      </h3>
    </CardHeader>
    <CardContent>
      <p className="text-gray-100 text-shadow">Email: emil@example.com</p>
      <p className="text-gray-100 text-shadow">Phone: +1234567890</p>
    </CardContent>
    <CardFooter>
      <Button>Get in Touch</Button>
    </CardFooter>
  </Card>
);

const WorkCard: React.FC = () => (
  <Card className="w-64 h-64" delay={1000}>
    <CardHeader>
      <h3 className="font-bold text-lg flex items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        Work
      </h3>
    </CardHeader>
    <CardContent>
      <p className="text-gray-100 text-shadow">
        Check out my latest projects and contributions in web development.
      </p>
    </CardContent>
    <CardFooter>
      <Button>View Projects</Button>
    </CardFooter>
  </Card>
);

export { AboutCard, ContactsCard, WorkCard };
