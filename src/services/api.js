const mockApiService = {
  getData: async (cb) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(mockUser()), 2000);
    });
  },
};

const mockUser = () => {
  return {
    name: 'Lucas Machado',
    age: 99,
    imageUrl: 'http://....',
  };
};

export {mockApiService as ApiService};
