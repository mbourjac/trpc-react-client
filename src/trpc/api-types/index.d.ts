import * as _trpc_server from '@trpc/server';
import * as _trpc_server_unstable_core_do_not_import from '@trpc/server/unstable-core-do-not-import';

type User = {
  id: number;
  username: string;
};

declare const appRouter: _trpc_server_unstable_core_do_not_import.BuiltRouter<
  {
    ctx: {
      userId: string | null;
      userRepository: {
        getUserByUsername(username: string): Promise<User | null>;
        data: User[];
        init(initialData: User[]): void;
        withData(data: User[]): any;
        sleep(): Promise<void>;
      };
    };
    meta: object;
    errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
    transformer: false;
  },
  _trpc_server_unstable_core_do_not_import.DecorateCreateRouterOptions<{
    auth: _trpc_server_unstable_core_do_not_import.BuiltRouter<
      {
        ctx: {
          userId: string | null;
          userRepository: {
            getUserByUsername(username: string): Promise<User | null>;
            data: User[];
            init(initialData: User[]): void;
            withData(data: User[]): any;
            sleep(): Promise<void>;
          };
        };
        meta: object;
        errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
        transformer: false;
      },
      {
        login: _trpc_server.TRPCMutationProcedure<{
          input: {
            username: string;
          };
          output: {
            user: User;
            token: string;
          };
        }>;
      }
    >;
  }>
>;

type AppRouter = typeof appRouter;

export type { AppRouter };
