import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import {filterButtonsContainerSX} from './Todolist.styles';
import Button from '@mui/material/Button';
import {FilterValuesType, TodolistType} from './app/App';
import {changeFilterAC} from './module/todolist-reducer';
import {useAppDispatch} from './app/hooks';

type  PropsType = {
    todolist:TodolistType
}

export const FilterTasksButtons = ({todolist}: PropsType) => {
    const {filter,id}=todolist
    const dispatch = useAppDispatch()
    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        dispatch(changeFilterAC({id, filter}))
    }
    return (
        <ButtonGroup sx={filterButtonsContainerSX}>
            <Button variant={filter === 'all' ? 'outlined' : 'contained'} color="error"
                    onClick={() => changeFilterTasksHandler('all')}>all</Button>
            <Button variant={filter === 'active' ? 'outlined' : 'contained'} color="primary"
                    onClick={() => changeFilterTasksHandler('active')}>active</Button>
            <Button variant={filter === 'completed' ? 'outlined' : 'contained'} color="secondary"
                    onClick={() => changeFilterTasksHandler('completed')}>completed</Button>
        </ButtonGroup>
    );
};
