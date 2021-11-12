export interface BaseState {
  loading?: boolean;
  success?: boolean;
  error?: string | null;
}

export interface MobileMenuState {
	show: boolean;
}

export interface HomeState{
	language: string,
}