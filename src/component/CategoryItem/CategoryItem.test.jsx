import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryItem} from './CategoryItem';

describe('Карточка категории отрисовывается правильно', () => {
    const mockProps = {
        strCategory: 'Desserts',
        strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
        strCategoryDescription: 'Dessert is a course that concludes a meal. The course usuall...'
    }
    const renderCategoryItem = () => {
        render(
            <MemoryRouter>
                <CategoryItem {...mockProps}></CategoryItem>
            </MemoryRouter>
        )
    }
    test('Картинка правильная', () => {
            renderCategoryItem()
            const imgElement = screen.getByAltText(/Dessert/i)
            expect(imgElement).toHaveAttribute('src', 'https://www.themealdb.com/images/category/dessert.png')
        }
    )
    test('Название правильное', () => {
        renderCategoryItem()
        const titleElement = screen.getByText(/Desserts/i);
        expect(titleElement).toBeInTheDocument();
        }
    )
    test('Описание правильное', () =>{
        renderCategoryItem()
        const descriptionElement = screen.getByText("Dessert is a course that concludes a meal. The course usuall...")
        expect(descriptionElement).toBeInTheDocument()
    })
})