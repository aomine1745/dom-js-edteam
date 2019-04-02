const profesor = document.createElement('span'),
teacher = document.getElementById('teacher');
profesor.textContent = 'Alexis Lozada';
profesor.classList.add('profesor');
profesor.id = 'profesorName';
teacher.append(profesor);