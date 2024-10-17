// src/app/sections/NonAuthHomeView.tsx

const NonAuthHomeView: React.FC = () => {
    return (
      <div>
        <h2>Vitajte!</h2>
        <p>Prihláste sa, aby ste získali prístup k exkluzívnemu obsahu.</p>
        <p><a href="/auth/prihlasenie">Prihlásiť sa</a> alebo <a href="/auth/registracia">Registrovať sa</a>.</p>
      </div>
    );
  };
  
  export default NonAuthHomeView;
  