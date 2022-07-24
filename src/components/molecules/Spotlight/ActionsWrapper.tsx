import { Anchor, Badge, Center, createStyles, Group, Text, UnstyledButton } from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";
import { ArrowBigRightLine, Search } from "tabler-icons-react";




const useStyles = createStyles((theme) => ({
    action: {
        position: 'relative',
        display: 'block',
        width: '100%',
        padding: '10px 12px',
        borderRadius: theme.radius.sm,
        ":hover": {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
        }
    },

    actionHovered: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        ":hover": {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
        }
    },

    actionBody: {
        flex: 1,
    },
}));


export default function ActionsWrapper({ children }: { children: React.ReactNode }) {
    const { classes, cx } = useStyles(undefined, { name: 'Spotlight' });
    const spotlight = useSpotlight();
    return (
        <div>
            {children}
            <Group
                position="apart"
                px={15}
                py="xs"
                sx={(theme) => ({
                    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                        }`,
                })}
            >
                <UnstyledButton
                    className={cx(classes.action)}
                    tabIndex={-1}
                    onMouseDown={(event:React.MouseEvent<HTMLButtonElement>) => event.preventDefault()}
                // {...others}
                >
                    <Group noWrap>
                        {/* {action.image && (
            <Center>
              <Image src={action.image} alt={action.title} width={50} height={50} />
            </Center>
          )} */}

                        <div className={classes.actionBody}>
                            <Text>Buscar por titulo</Text>

                            {/* {action.description && (
              <Text color="dimmed" size="xs">
                {action.description}
              </Text>
            )} */}
                        </div>

                        {/* {action.new && <Badge>new</Badge>} */}
                    </Group>
                </UnstyledButton>
                <UnstyledButton
                    className={cx(classes.action)}
                    tabIndex={-1}
                    onMouseDown={(event:React.MouseEvent<HTMLButtonElement>) => event.preventDefault()}
                    onClick={() => {
                        // TODO: Redirect
                    }}
                >
                    <Group noWrap>
                        {true && (
                            <Center>
                                <ArrowBigRightLine />
                            </Center>
                        )}

                        <div className={classes.actionBody}>
                            <Text>Busqueda avanzada</Text>

                            <Text color="dimmed" size="xs">
                                Mostrara una busqueda por filtros
                            </Text>
                        </div>

                        {true && <Badge>new</Badge>}
                    </Group>
                </UnstyledButton>
            </Group>
            <Group
                position="apart"
                px={15}
                py="xs"
                sx={(theme) => ({
                    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                        }`,
                })}
            >
                <Text size="xs" color="dimmed">
                    Search powered by Mantine
                </Text>
                <Anchor size="xs" href="#">
                    Learn more
                </Anchor>
            </Group>
        </div>
    );
}