export interface Database {
  public: {
    Tables: {
      blessings: {
        Row: {
          approved: boolean;
          created_at: string;
          id: number;
          message: string;
          name: null | string;
        };
        Insert: {
          approved?: boolean;
          created_at?: string;
          id?: number;
          message: string;
          name?: null | string;
        };
        Update: {
          approved?: boolean;
          created_at?: string;
          id?: number;
          message?: string;
          name?: null | string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
