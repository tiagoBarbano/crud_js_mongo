import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://tiagoventura:jQG08nXHDLPADWGz@cluster0.1du3xts.mongodb.net/ESTUDO?retryWrites=true&w=majority',
      ),
  },
];
