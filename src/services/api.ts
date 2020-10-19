interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'askdjsakdjjasbfjn21j1k3k12jiujdsaf89sad',
        user: {
          name: 'Wilson Santos',
          email: 'will@example.com',
        },
      });
    }, 1500);
  });
}
