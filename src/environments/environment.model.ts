export interface Environment {
  name: 'local' | 'dev' | 'uat' | 'stagging' | 'prod';
  production: boolean;
  apiUrl: string;
}
